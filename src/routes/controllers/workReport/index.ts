import { conn, WorkReport, WorkTable } from "../../../db";
import { WorkReportTS } from "../../../interfaces/ReportsModels/Work";

const createWorkReport = async (
  report: WorkReportTS
): Promise<WorkReportTS> => {
  // Get data and table data
  const { tableData, ...workReport } = report;

  // Save date
  const createdReport: any = await WorkReport.create(workReport as any);
  for (const item of tableData) {
    const tableData = await WorkTable.create(item as any);
    createdReport.setTableData(tableData);
  }

  // Return report
  return {
    ...createdReport.dataValues,
    tableData,
  };
};

const getAllWorkReports = async () => {
  const workReports = await WorkReport.findAll({
    include: [
      {
        model: WorkTable,
        as: "tableData", // Usa el alias 'tableData'
        required: false, // Devuelve WorkReport incluso si no hay registros relacionados en WorkTable
      },
    ],
  });
  return workReports.map((report: any) => ({
    ...report.get({ plain: true }),
    tableData: report.tableData || [], // Asegura que tableData sea un array vacío si no hay datos
  }));
};

const updateWorkReport = async (workReport: WorkReportTS) => {
  const transaction = await conn.transaction(); // Iniciar una transacción

  try {
    // Obtener el WorkReport usando findByPk
    const existingReport = await WorkReport.findByPk(workReport.numero, {
      transaction,
    });
    if (!existingReport) {
      throw new Error("Work Report not found");
    }

    // Actualizar WorkReport
    await existingReport.update(workReport, { transaction });

    // Manejar tableData
    if (workReport.tableData) {
      // Eliminar todos los tableData existentes primero
      await WorkTable.destroy({
        where: { numero: existingReport.dataValues.numero },
        transaction,
      });

      // Crear nuevos tableData
      for (const table of workReport.tableData) {
        await WorkTable.create(
          {
            ...table,
            numero: existingReport.dataValues.numero,
          },
          { transaction }
        );
      }
    }

    // Si todo ha ido bien, commit de la transacción
    await transaction.commit();
  } catch (error) {
    // Si hay algún error, hacer rollback de la transacción
    await transaction.rollback();
    throw error; // Re-lanzar el error después de hacer rollback
  }
};

// Define la función para eliminar una inspección por su ID
const deleteWorkReport = async (id: string) => {
  // Get work report
  const workReport = await WorkReport.findByPk(id);
  if (!workReport) throw new Error("Work Report not found");

  // Delete data
  await workReport.destroy();
};

export {
  createWorkReport,
  getAllWorkReports,
  updateWorkReport,
  deleteWorkReport,
};

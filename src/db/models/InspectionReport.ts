export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "InspectionReport",
    {
      numero: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      yearFMCSA: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      FMCSA: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      yearBIT: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      BIT: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      licenseNumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      equipment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ownerOrLessor: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok1: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok2: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok3: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material3: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok4: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material4: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok5: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material5: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok6: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material6: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok7: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material7: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok8: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material8: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok9: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material9: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok10: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material10: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok11: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material11: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ok12: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      labor12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      material12: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "InspectionReport",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      yearFMCSA: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      FMCSA: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      yearBIT: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BIT: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      licenseNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      equipment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ownerOrLessor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ok1: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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

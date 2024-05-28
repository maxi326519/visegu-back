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
        type: DataTypes.TEXT,
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
        type: DataTypes.TEXT,
        allowNull: true,
      },
      state: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      location: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      equipment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ownerOrLessor: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok1: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair11: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair21: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair31: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor1: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material1: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok2: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair12: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair22: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair32: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor2: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material2: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok3: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair13: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair23: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair33: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor3: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material3: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok4: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair14: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair24: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair34: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor4: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material4: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok5: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair15: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair25: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair35: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor5: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material5: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok6: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair16: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair26: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair36: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor6: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material6: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok7: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair17: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair27: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair37: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor7: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material7: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok8: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair18: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair28: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair38: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor8: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material8: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok9: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair19: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair29: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair39: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor9: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material9: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok10: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair110: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair210: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair310: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor10: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material10: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok11: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair111: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair211: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair311: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor11: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material11: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ok12: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      repair112: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair212: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      repair312: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      labor12: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      material12: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

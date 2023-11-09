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
    },
    { updatedAt: false, timestamps: false }
  );
};
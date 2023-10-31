export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "WorkReport",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      customer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeToStartServices: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      equipment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfRepair: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeFinishService: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      licensePlate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PO: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      VIN: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mechanicName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

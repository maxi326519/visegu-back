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
      RIF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ROF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      RIR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ROR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LIF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LOF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LIR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LOR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};
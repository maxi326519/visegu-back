export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "WorkReport",
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
        allowNull: true,
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
        allowNull: true,
      },
      licensePlate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      PO: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      VIN: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mechanicName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      RIF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      RIFData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      RIFData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ROF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      ROFData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ROFData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      RIR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      RIRData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      RIRData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ROR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      RORData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      RORData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LIF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LIFData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LIFData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LOF: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LOFData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LOFData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LIR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LIRData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LIRData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LOR: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      LORData: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      LORData2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

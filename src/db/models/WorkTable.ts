export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "WorkTable",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING,
        alowNull: false,
      },
      workDescription: {
        type: DataTypes.STRING,
        alowNull: false,
      },
      laborTime: {
        type: DataTypes.STRING,
        alowNull: false,
      },
      parts: {
        type: DataTypes.STRING,
        alowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        alowNull: true,
      },
      total: {
        type: DataTypes.STRING,
        alowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "WorkReportsDetails",
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
      total: {
        type: DataTypes.STRING,
        alowNull: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

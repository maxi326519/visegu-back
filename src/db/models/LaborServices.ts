export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "LaborServices",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      codeNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { updatedAt: false, timestamps: false }
  );
};

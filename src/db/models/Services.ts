export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Services",
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

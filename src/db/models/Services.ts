export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Services",
    {
      code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

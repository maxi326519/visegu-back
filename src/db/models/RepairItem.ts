export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "RepairItem",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

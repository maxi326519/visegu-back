export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Equipments",
    {
      name: { 
       type: DataTypes.STRING,
       allowNull: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

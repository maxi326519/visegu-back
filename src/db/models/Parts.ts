export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Parts",
    {
      name: { 
       type: DataTypes.STRING,
       allowNull: false,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

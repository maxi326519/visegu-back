export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      descripcion: { 
       type: DataTypes.STRING,
       allowNull: false,
      },
      skuNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      disabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    },
    { updatedAt: false }
  );
};

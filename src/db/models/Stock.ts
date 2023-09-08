export const model = (sequelize: any, DataTypes: any) => {
    sequelize.define(
      "Stock",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        quantity: { 
         type: DataTypes.INTEGER,
         allowNull: false,
        },
      },
      { updatedAt: false }
    );
  };
  
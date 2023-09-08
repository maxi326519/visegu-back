export const model = (sequelize: any, DataTypes: any) => {
    sequelize.define(
      "Storage",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: { 
         type: DataTypes.STRING,
         allowNull: false,
        },
        diabled: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        }
      },
      { updatedAt: false }
    );
  };
  
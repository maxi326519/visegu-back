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
        disabled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        }
      },
      { updatedAt: false, timestamps: false }
    );
  };
  
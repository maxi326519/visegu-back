export const model = (sequelize: any, DataTypes: any) => {
    sequelize.define(
      "Categories",
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
      },
      { updatedAt: false, timestamps: false }
    );
  };
  
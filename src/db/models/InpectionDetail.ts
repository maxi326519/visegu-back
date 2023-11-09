export const model = (sequelize: any, DataTypes: any) => {
    sequelize.define(
      "InspectionDetail",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        ok: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        repair: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        labor: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        material: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
      },
      { updatedAt: false, timestamps: false }
    );
  };
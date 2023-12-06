export const model = (sequelize: any, DataTypes: any) => {
  sequelize.define(
    "Movements",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("Egress", "Ingress", "Transfer"),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      StockIngressId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      StockEgressId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      StorageIngressId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      StorageEgressId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    { updatedAt: false, timestamps: false }
  );
};

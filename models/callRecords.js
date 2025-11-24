module.exports = (sequelize, DataTypes) => {
  const CallLog = sequelize.define(
    "call_records",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      call_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      agent_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      booking_user: {
        type: DataTypes.STRING,
      },
      booking_time: {
        type: DataTypes.DATE,
      },
      booking_date: {
        type: DataTypes.DATE,
      },
      booking_summary: {
        type: DataTypes.TEXT,
      },

      from_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      to_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      transcript: {
        type: DataTypes.TEXT,
      },

      duration: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },

      combined_cost: {
        type: DataTypes.DECIMAL(10, 4),
        allowNull: true,
      },

      created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },

      updated_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    },
    {
      tableName: "call_records",
      timestamps: false,
    }
  );
};

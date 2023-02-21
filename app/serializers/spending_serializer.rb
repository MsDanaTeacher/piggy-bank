class SpendingSerializer < ActiveModel::Serializer
  attributes :id, :reflection, :budget, :date, :user_id
end

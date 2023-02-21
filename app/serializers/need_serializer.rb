class NeedSerializer < ActiveModel::Serializer
  attributes :id, :purchased, :price, :user_id, :date
end

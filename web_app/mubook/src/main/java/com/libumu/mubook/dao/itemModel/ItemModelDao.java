package com.libumu.mubook.dao.itemModel;

import com.libumu.mubook.entities.ItemModel;

import java.util.List;

public interface ItemModelDao {
    public List<ItemModel> getAllItemModels();
    public List<ItemModel> getItemModelsByType(int itemTypeId);
    public ItemModel getItemModel(long id);
    public void editItemModel(ItemModel itemModel);
    public void deleteItemModel(long id);
    public void deleteItemModel(ItemModel itemModel);
    public void addItemModel(ItemModel itemModel);
    public List<Object[]> getAllItemModelId();
    int countItemModelByIdentifierAndItemModelIdNotLike(String identifier, Long itemModelId);
    List<ItemModel> getItemModelsBySpecification(List<Long> ids, int specId, String specValue);
    int countItemModelByIdentifier(String identifier);
}

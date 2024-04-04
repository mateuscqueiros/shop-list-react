import { IconCheck, IconEdit, IconTrash } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import './ShopItem.scss';

export interface ShopListItemType {
  id: number;
  title: string;
}

export interface ShopItemProps {
  item: ShopListItemType;
  onEdit: (item: ShopListItemType) => void;
  onDelete: (id: number) => void;
}

export function ShopItem({ item, onEdit, onDelete }: ShopItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  function handleCheck() {
    setIsEditing(false);
    const title = titleInputRef.current?.value;
    if (title) {
      onEdit({ id: item.id, title });
    }
  }

  return (
    <div className="shop-item">
      <div>
        {!isEditing && <span>{item.title}</span>}
        {isEditing && (
          <input type="text" defaultValue={item.title} ref={titleInputRef} />
        )}
      </div>
      <div className="item-actions">
        {!isEditing && (
          <div className="normal-actions">
            <IconEdit onClick={() => setIsEditing(true)} />
            <IconTrash onClick={() => onDelete(item.id)} />
          </div>
        )}
        {isEditing && (
          <div className="edit-actions">
            <IconCheck onClick={handleCheck} />
          </div>
        )}
      </div>
    </div>
  );
}

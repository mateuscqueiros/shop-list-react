import { IconPlus } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import './App.scss';
import { ShopItem, ShopListItemType } from './ShopItem';

const shopListItems: ShopListItemType[] = [
  {
    id: 0,
    title: 'Frutas',
  },
  {
    id: 1,
    title: 'Comida',
  },
  {
    id: 2,
    title: 'Bebida',
  },
  {
    id: 3,
    title: 'Limpeza',
  },
];

function App() {
  const [items, setItems] = useState<ShopListItemType[]>(shopListItems);
  const createInputRef = useRef<HTMLInputElement>(null);
  const maxId = Math.max(...items.map((item) => item.id));

  function createItem() {
    const title = createInputRef.current?.value;
    if (title) {
      const el = {
        id: maxId + 1,
        title,
      };
      setItems([...items, el]);
    }
  }

  function editItem(newItem: ShopListItemType) {
    setItems([...items.filter((item) => item.id !== newItem.id), newItem]);
  }

  function deleteItem(id: number) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div id="container">
      <div className="actions">
        <input id="add-input" type="text" ref={createInputRef} />
        <IconPlus size={20} onClick={createItem} />
      </div>
      {items.length === 0 && (
        <span className="no-items-message">Sem itens</span>
      )}
      <ul className="items-list">
        {items.map((item) => (
          <ShopItem
            item={item}
            key={item.id}
            onEdit={(newItem: ShopListItemType) => editItem(newItem)}
            onDelete={(id: number) => deleteItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;

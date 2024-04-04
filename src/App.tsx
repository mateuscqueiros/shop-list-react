import { IconPlus } from '@tabler/icons-react';
import './App.scss';

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

interface ShopListItemType {
  id: number;
  title: string;
}

function App() {
  return (
    <div id="container">
      <div className="actions">
        <input id="add-input" type="text" />
        <IconPlus />
      </div>
      <span className="no-items-message">Sem itens</span>
      <ul className="items-list"></ul>
    </div>
  );
}

export default App;

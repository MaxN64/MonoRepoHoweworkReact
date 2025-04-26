import React from "react";

const ListsComponent = () => {
  return (
    <div>
      <h2>Неупорядоченный список</h2>
      <ul>
        <li>
          Элемент А
          <ul>
            <li>Вложенный А1</li>
          </ul>
        </li>
        <li>Элемент В</li>
      </ul>

      <h2>Упорядоченный список</h2>
    <ol>
      <li>Пункт 1
        <ol>
          <li>Вложенный 1.1</li>
        </ol>
      </li>
      <li>Пункт 2</li>
    </ol>
    </div>
  );
};

export default ListsComponent;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FocusZone, FocusZoneDirection } from "@fluentui/react/lib/FocusZone";
import { classNames } from "./classess";
import { ListKeys, RootState } from "./interface";
import { List } from "@fluentui/react/lib/List";
import { listTodo } from "../../store/actions/listActions";

const ListItems: React.FC = () => {
  const [renderList, setRenderList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTodo());
  }, []);

  const list = useSelector((state: RootState) => state.list.list);

  useEffect(() => {
    if (list && list.length) setRenderList(list);
  }, [list]);

  const onRenderCell = (
    item: ListKeys | undefined,
    index: number | undefined
  ): JSX.Element => {
    return (
      <div className={classNames.itemContent}>
        <div className={classNames.itemCell} data-is-focusable={true}>
          {item?.title}
        </div>
      </div>
    );
  };

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <div className={classNames.container} data-is-scrollable>
        <List items={renderList} onRenderCell={onRenderCell} />
      </div>
    </FocusZone>
  );
};

export default ListItems;

import { useEffect, useState } from "react";
import ListPageView from "./ListPageView";
import Model from "./ListPageModel";

const ListPageController = () => {
  const [posts, setPosts] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    Model.getPosts().then((data) => setPosts(data));
  }, []);

  return <ListPageView isOpen={isOpen} setIsOpen={setIsOpen} posts={posts} />;
};

export default ListPageController;

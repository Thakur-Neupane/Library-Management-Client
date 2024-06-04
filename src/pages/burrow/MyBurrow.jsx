import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { MyBurrowTable } from "../../components/tables/MyBurrowTable";
import { useDispatch } from "react-redux";
import { fetchBurrowsAction } from "../../features/burrows/burrowAction";

const MyBurrow = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBurrowsAction());
  }, [dispatch]);
  return (
    <UserLayout pageTitle={"My burrow list"}>
      <MyBurrowTable />
    </UserLayout>
  );
};

export default MyBurrow;

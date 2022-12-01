
import React, { useEffect, useState, useContext } from "react";
// import "../../styles/styles.scss";
// import Header from "./Header/Header";
import TableContainer from "../../shared/Table/TableContainer";
import AppStateContext from "../../shared/appState";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

function ProductPage(){
    const AppState = useContext(AppStateContext);
    console.log('11111');
    //gets data for application
    useEffect(() => {
        AppState.GetData();
    }, []);
    
    return (
        <>
        {/* <Header /> */}
        <PerfectScrollbar
          onScrollDown={(Container) => {
            var currentScrollPos = Container.scrollHeight - Container.scrollTop;
            var BottomOfScreen = Container.clientHeight + 1;
            if (currentScrollPos <= BottomOfScreen) {
              AppState.LoadMoreCrypto();
            }
          }}
          className="Container"
        >
          <TableContainer />
        </PerfectScrollbar>
      </>
    );}

export default ProductPage
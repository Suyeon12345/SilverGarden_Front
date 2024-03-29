import React from "react";
import { Table } from "react-bootstrap";
import styles from "./approvalWrite.module.css";
const ApprovalWriteLine = ({ lineData }) => {
  return (
    <div className={styles.approvalLineWrap}>
      <div className={styles.approvalTableHeader}>결재</div>
      <div className={styles.agreeTableHeader}>합의</div>
      <div className={styles.approvalTable}>
        <Table className='mb-0 mt-0' striped bordered size="sm">
        <thead>
          <tr style={{height:'40px'}}>
            <th style={{width:"33%"}}>{lineData.approvalLine[0] ? lineData.approvalLine[0].ap_name+" "+lineData.approvalLine[0].ap_rank : ""}</th>
            <th style={{width:"33%"}}>{lineData.approvalLine[1] ? lineData.approvalLine[1].ap_name+" "+lineData.approvalLine[1].ap_rank : ""}</th>
            <th style={{width:"33%"}}>{lineData.approvalLine[2] ? lineData.approvalLine[2].ap_name+" "+lineData.approvalLine[2].ap_rank : ""}</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{height:'50px'}}>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr style={{height:'40px'}}>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      </div>
      <div className={styles.agreeTable}>
        <Table className='mb-0 mt-0' striped bordered size="sm">
          <thead>
            <tr style={{height:'40px'}}>
              <th style={{width:"33%"}}>{lineData.agreement[0] ? lineData.agreement[0].ap_name+" "+lineData.agreement[0].ap_rank : ""}</th>
              <th style={{width:"33%"}}>{lineData.agreement[1] ? lineData.agreement[1].ap_name+" "+lineData.agreement[1].ap_rank : ""}</th>
              <th style={{width:"33%"}}>{lineData.agreement[2] ? lineData.agreement[2].ap_name+" "+lineData.agreement[2].ap_rank : ""}</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "50px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "40px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className={styles.agreeTable}>
        <Table className="mb-0 mt-0" striped bordered size="sm">
          <thead>
            <tr style={{ height: "40px" }}>
              <th style={{ width: "33%" }}>
                {lineData.agreement[0]
                  ? lineData.agreement[0].ap_name +
                    " " +
                    lineData.agreement[0].ap_rank
                  : ""}
              </th>
              <th style={{ width: "33%" }}>
                {lineData.agreement[1]
                  ? lineData.agreement[1].ap_name +
                    " " +
                    lineData.agreement[1].ap_rank
                  : ""}
              </th>
              <th style={{ width: "33%" }}>
                {lineData.agreement[2]
                  ? lineData.agreement[2].ap_name +
                    " " +
                    lineData.agreement[2].ap_rank
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ height: "50px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{ height: "40px" }}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr style={{height:'40px'}}>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ApprovalWriteLine;

import InheritFile from './InheritageFile';
import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
    {
        title: 'First name',
        dataIndex: 'firstname',
    },
    {
        title: 'Second name',
        dataIndex: 'secondname',
    },
    {
        title: 'Status',
        dataIndex: 'info',
    },
    {
        title: 'Departament',
        dataIndex: 'favDist',
    },
    {
        title: 'Code',
        dataIndex: 'username',
    },
    {
        title: 'Key',
        dataIndex: 'key',
    },
    {
        title: 'Allied',
        dataIndex: 'w_mrrobot',
    },
];


const data: InheritFile[] =[
    {
        id: '1',
        firstname: 'Wrath',
        secondname: 'Rene',
        info: 'Demensional Pilon ',
        favDist: 'Apex',
        username: 'WRX',
        key: 4357,
        w_mrrobot: 'Yes'
    },
    {
        id: '2',
        firstname: 'Bangalor',
        secondname: 'Olivia',
        info: 'Army Soldier',
        favDist: 'IMC',
        username: 'BANX',
        key: 21467867,
        w_mrrobot: 'No'
    },
]

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: InheritFile[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: InheritFile) => ({
        disabled: record.firstname === 'Disabled User', // Column configuration not to be checked
        name: record.firstname,
    }),
};

export const Inher = () => {

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return(
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default Inher;
import React, { useState, useEffect } from 'react';
import { Page } from 'components';
import { CURRENCY_OPTIONS } from 'constants/common';
import { Header, Dropdown, Input, Dimmer, Loader, Table, Message } from 'semantic-ui-react';

const HomePage = props => {

    const [amount, setAmount] = useState(1);
    const [fromCurr, setFromCurr] = useState('USD');
    const [toCurr, setToCurr] = useState('EUR');
    const { dataList, loading, error } = props.conversions;

    useEffect(() => {
        convertCurrency();
    }, [fromCurr, toCurr, amount]);

    const [result, setResult] = useState('');

    const handleChangeFromCurr = (e, { value }) => {
        setFromCurr(value); 
    }

    const handleChangeToCurr = (e, { value }) => {
        setToCurr(value);
    }

    const handleChangeAmount = (e, { value }) => {
        setAmount(value);
        setResult(result * amount);
    }

    const convertCurrency = () => {
        props.CurrencyService.convertCurrency({fromCurr, amount, toCurr});
        if(dataList.length) {
            setResult(dataList[dataList.length -1].toAmount * amount);
        }
    }

    const renderTableData = dataList => (
        <Table.Body>
            {dataList.map((data, i) => (
                <Table.Row key={`data_${i}`}>
                    <Table.Cell>{data.amount}</Table.Cell>
                    <Table.Cell>{data.fromCurr}</Table.Cell>
                    <Table.Cell>{data.toCurr}</Table.Cell>
                    <Table.Cell>{data.toAmount}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
    )

    return <section className="currency-panel">
        <Page>
            <div className="form-container centered">
                <Dimmer active={loading} inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>
                
                {error && <Message negative>{error}</Message>}
                <div className="field-row">
                    <Dropdown
                        fluid
                        options={CURRENCY_OPTIONS}
                        value={fromCurr}
                        onChange={handleChangeFromCurr}
                    />

                    <Dropdown
                        fluid
                        options={CURRENCY_OPTIONS}
                        value={toCurr}
                        onChange={handleChangeToCurr}
                    />
                </div>
                <div className="field-row">
                    <Input id="fromAmount" type="number" value={amount} placeholder="Amount" onChange={handleChangeAmount}/>
                    <Input id="toAmount" type="number" readOnly value={result || dataList.length ? dataList[dataList.length -1].toAmount : ''} />
                </div>
            </div>

            {dataList.length > 0 && 
                <div className="conversion-table">
                    <Header as="h3">Your conversion history</Header>
                    <Table celled unstackable color='blue'>
                        <Table.Header>
                        <Table.Row className="head-row">
                            <Table.HeaderCell colSpan="2">From</Table.HeaderCell>
                            <Table.HeaderCell colSpan="2">To</Table.HeaderCell>
                        </Table.Row>
                        <Table.Row>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Currency</Table.HeaderCell>
                            <Table.HeaderCell>Currency</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>
                        {renderTableData(dataList)}
                    </Table>
                </div>
            }
        </Page>
    </section>
}

export default HomePage;
import React, { Component } from 'react';

class Apps extends Component {
	render() {
		var heading = ['S.No', 'Parts', 'Quantity','Action','Status'];
		var body =
			[['1', 'SSD', 2,["Open ", "Close"],'Active'],
			['2', 'HDD', 32,["Open ", "Close"],'Active'],
			['3', 'ice', 4,["Open ", "Close"],'Active'],
			['4', 'briyani', 10,["Open ", "Close"],'Active']
			];
		return (
			<div >

				<Table heading={heading} body={body} />
			</div>
		);
	}
}

class Table extends Component {
	render() {
		var heading = this.props.heading;
		var body = this.props.body;
		return (
            
			<table style={{ width: 500 }}>
				<thead>
					<tr>
						{heading.map(head => <th>{head}</th>)}
					</tr>
				</thead>
				<tbody>
					{body.map(row => <TableRow row={row} />)}
                    
				</tbody>
                
			</table>
		);
	}
}

class TableRow extends Component {
	render() {
		var row = this.props.row;
		return (
			<tr>
				{row.map(val => <td>{val}</td>)}
			</tr>
		)
	}
}

export default Apps;

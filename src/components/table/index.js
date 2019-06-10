import React from 'react'
import style from './table.module.css'
import { map } from 'lodash'
import { Icon } from 'react-icons-kit'
import { eye } from 'react-icons-kit/fa/eye'
import { edit } from 'react-icons-kit/fa/edit'
import { trash } from 'react-icons-kit/fa/trash'

class Table extends React.Component {

    renderHeader() {

        const headers = map(this.props.headers, (header, index) => {

            return (
                <th scope="col">{header}</th>
            )
        })

        if (headers.length) {

            headers.push(<th scope="col"></th>)
            headers.push(<th scope="col"></th>)
            headers.push(<th scope="col"></th>)
        }

        return headers
    }

    renderBody() {

        return map(this.props.data, (value, index) => {

            const tds = map(Object.keys(value), (key, code) => {

                return (
                    <td>{value[key]}</td>
                )
            })

            return (
                <tr key={index}>
                    {tds}
                    <td>
                        <span className={style.btn_table} onClick={() => { this.props.visualize(value) }}>
                            <Icon size={20} icon={eye} />
                        </span>
                    </td>
                    <td data-toggle='modal' data-target={this.props.modal_id}>
                        <span className={style.btn_table} onClick={() => { this.props.edit(value) }}>
                            <Icon size={20} icon={edit} />
                        </span>
                    </td>
                    <td>
                        <span className={style.btn_table} onClick={() => { this.props.remove(value) }}>
                            <Icon size={20} icon={trash} />
                        </span>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className={'table-responsive'}>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            {this.renderHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table

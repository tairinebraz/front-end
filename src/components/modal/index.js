import React from 'react'

class Modal extends React.Component {

    renderModalFooter() {

        if (this.props.renderFooter) {

            return (
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                        onClick={this.props.onClose}
                    >
                        Fechar
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.props.onClick}
                    >
                        {this.props.btnTitle}
                    </button>
                </div>
            )
        }

        return (null)
    }

    render() {

        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="modalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCenterTitle">{this.props.title}</h5>
                            <button id={'closeModal'} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        { this.renderModalFooter() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal

import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, withPlatform, withAdaptivity, ViewWidth, ModalRoot, ModalPage, ModalPageHeader, PanelHeaderButton, PanelHeaderClose, IOS,
    View,Group, CellButton, ANDROID    } from '@vkontakte/vkui';

const MODAL_PAGE_FULLSCREEN = 'fullscreen';
const DynamicModalPage = ({ updateModalHeight, onClose, ...props }) => {
    const { viewWidth } = useAdaptivity();
    const isMobile = viewWidth <= ViewWidth.MOBILE;
    const platform = usePlatform();
    const [expanded, setExpanded] = React.useState(false);
    const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

    return (
        <ModalPage
            {...props}
            header={
                <ModalPageHeader
                    right={isMobile && platform === IOS && <PanelHeaderButton onClick={onClose}><Icon24Dismiss /></PanelHeaderButton>}
                    left={isMobile && platform === ANDROID && <PanelHeaderClose onClick={onClose} />}
                >
                    Dynamic modal
                </ModalPageHeader>
            }
        >
            <Group>
                <CellButton onClick={toggle}>
                    {expanded ? "collapse" : "expand"}
                </CellButton>
                {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
            </Group>
        </ModalPage>
    );
};


const Trainings = withPlatform(withAdaptivity(class Trainings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeModal: null,
            modalHistory: []
        };

        this.modalBack = () => {
            this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
        };
    }

    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

        if (activeModal === null) {
            modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
            modalHistory.push(activeModal);
        }

        this.setState({
            activeModal,
            modalHistory
        });
    };

    render() {
        const isMobile = this.props.viewWidth <= ViewWidth.MOBILE;
        const platform = this.props.platform;

        const modal = (
            <ModalRoot
                activeModal={this.state.activeModal}
                onClose={this.modalBack}
            >
                <ModalPage
                    id='fullscreen'
                    onClose={this.modalBack}
                    settlingHeight={100}
                    header={
                        <ModalPageHeader
                            right={platform === IOS && <PanelHeaderButton onClick={this.modalBack}><Icon24Dismiss /></PanelHeaderButton>}
                            left={isMobile && platform === ANDROID && <PanelHeaderClose onClick={this.modalBack} />}
                        >
                            Тренировки
                        </ModalPageHeader>
                    }
                >
                </ModalPage>


            </ModalRoot>
        );

        return (
            <View activePanel="modals" modal={modal}>
                <Panel id="modals">
                    <Group>
                        <CellButton onClick={() => this.setActiveModal('fullscreen')}>
                            Получить Тренировки
                        </CellButton>
                    </Group>
                </Panel>
            </View>
        );
    }
}, {
    viewWidth: true
}));


export default Trainings;
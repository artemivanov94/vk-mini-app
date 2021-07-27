import React, { useState, useEffect } from 'react';
// import Progress from 'react-circle-progress-bar'
import { Panel, PanelHeader, PanelHeaderBack, Div, FixedLayout, Button, Title, Headline, View, FormLayout, Radio, Gallery, Group, FormItem, Select, CustomSelectOption, Caption, Progress } from '@vkontakte/vkui';
import { ChipsSelect } from '@vkontakte/vkui/unstable';
import timeIcon from '../img/time-icon.svg';
import timeIconWhite from '../img/time-icon-white.svg';
import handIcon from '../img/hand-icon.svg';
import chestIcon from '../img/chest-icon.svg';
import legIcon from '../img/leg-icon.svg';
import pressIcon from '../img/press-icon.svg';
import waistIcon from '../img/waist-icon.svg';
import muscleIcon from '../img/muscle-icon.svg';
import thumbIcon from '../img/thumb-icon.svg';
import appleIcon from '../img/apple-icon.svg';
import './onboarding.css';

const Onboarding = () => {
    const [selectedDays, setSelectedDays] = React.useState([]);
    const [activePanel, setActivePanel] = useState('onboarding-panel1');
    const [slideIndexAge, setSlideIndexAge] = useState(6);
    const [slideIndexHeight, setSlideIndexHeight] = useState(30);
    const [slideIndexWeight, setSlideIndexWeight] = useState(30);
    const [procent, setProcent] = useState(0);  
    const ageArray = [];  for (let i = 14; i <= 70; i++)  ageArray.push(i);
    const heightArray = [];  for (let i = 140; i <= 200; i++)  heightArray.push(i);
    const weightArray = [];  for (let i = 30; i <= 100; i++)  weightArray.push(i); 
    const days = [{ value: 'Понедельник', label: 'Понедельник' }, { value: 'Вторник', label: 'Вторник' }, { value: 'Среда', label: 'Среда' }, { value: 'Четверг', label: 'Четверг' }, { value: 'Пятница', label: 'Пятница' }, { value: 'Суббота', label: 'Суббота' }, { value: 'Воскресенье', label: 'Воскресенье' },]
    const time = [{ value: '5:00', label: '5:00' }, { value: '6:00', label: '6:00' }, { value: '7:00', label: '7:00' }, { value: '8:00', label: '8:00' }, { value: '9:00', label: '9:00' }, { value: '10:00', label: '10:00' }, { value: '11:00', label: '11:00' }, { value: '12:00', label: '12:00' }, { value: '13:00', label: '13:00' }, { value: '14:00', label: '14:00' }, { value: '15:00', label: '15:00' }, { value: '16:00', label: '16:00' }, { value: '17:00', label: '17:00' }, { value: '18:00', label: '18:00' }, { value: '19:00', label: '19:00' }, { value: '20:00', label: '20:00' }, { value: '21:00', label: '21:00' }, { value: '22:00', label: '22:00' }, { value: '23:00', label: '23:00' }, { value: '24:00', label: '24:00' }]
    const setPanel = (e) => {
        setActivePanel(e.currentTarget.dataset.to)
        if ( e.currentTarget.dataset.to === 'onboarding-panel-finish') { 
            const timerId = setInterval( () => 
            procent >= 100 ? clearInterval(timerId) : setProcent(procent => procent + 1), 50); 
            setTimeout(()=>{ clearInterval(timerId); setProcent(100) },5000) 
        }
    }
    const getTrainings = () =>{
        alert('Ура')
    }
    
    return (
        <View activePanel={activePanel} >
            <Panel id="onboarding-panel1">
                <Div >
                    <div className="vertical-center">
                        <div className="vertical-center-content text-centered">
                            <img className="timeIcon" src={timeIcon} alt="Time icon" />
                            <Title level="1" weight="semibold" style={{ marginBottom: 10, marginTop: 32 }}>Тренировки</Title>
                            <Headline weight="regular" style={{ color: '#818C99' }}>Укажите свои данные, тогда приложение составит программу тренировок специально для вас</Headline>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel2"   >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel2" >
                <PanelHeader separator={false}>
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}>Что вам удобнее?</Title>
                    <div className="vertical-center align-top">
                        <div className="vertical-center-content ">
                            <FormLayout>
                                <Radio name="scale" className="custom-radio" value="1">Метрическая система (см, кг)</Radio>
                                <Radio name="scale" className="custom-radio" value="2">Имперская система (фунты, футы)</Radio>
                            </FormLayout>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel3"  >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel3">
                <PanelHeader separator={false} >
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"><span className="active"></span><span></span><span></span><span></span><span></span><span></span></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}>Над чем хотите  <br /> поработать?</Title>
                    <div className="vertical-center align-top">
                        <div className="vertical-center-content ">
                            <FormLayout style={{ width: '100%' }}>
                                <Radio name="body" className="custom-radio with-img" value="1"><img src={handIcon} /> Руки</Radio>
                                <Radio name="body" className="custom-radio with-img" value="1"><img src={chestIcon} /> Грудь</Radio>
                                <Radio name="body" className="custom-radio with-img" value="1"><img src={pressIcon} /> Пресс</Radio>
                                <Radio name="body" className="custom-radio with-img" value="1"><img src={waistIcon} /> Талия</Radio>
                                <Radio name="body" className="custom-radio with-img" value="1"><img src={legIcon} /> Ноги</Radio>
                            </FormLayout>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel4"  >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel4">
                <PanelHeader separator={false} left={<PanelHeaderBack onClick={setPanel} data-to="onboarding-panel3" />}>
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"><span className="active"></span><span className="active"></span><span></span><span></span><span></span><span></span></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}>Укажите <br /> ваш возраст</Title>
                    <div className="vertical-center align-top">
                        <div className="vertical-center-content ">
                            <Gallery className="custom-gallery"
                                slideWidth="20%"
                                align="center"
                                slideIndex={slideIndexAge}
                                onChange={slideIndexAge => setSlideIndexAge(slideIndexAge)}
                                style={{ height: 50 }}
                            >
                                {ageArray.map((value, index) => {
                                    return <div className={slideIndexAge === index ? 'active' : ''}>{value}</div>
                                })

                                }
                            </Gallery>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel5"  >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel5">
                <PanelHeader separator={false} left={<PanelHeaderBack onClick={setPanel} data-to="onboarding-panel4" />}>
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"><span className="active"></span><span className="active"></span><span className="active"></span><span></span><span></span><span></span></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}>Укажите <br /> ваш рост</Title>
                    <div className="vertical-center align-top">
                        <div className="vertical-center-content ">
                            <Gallery className="custom-gallery"
                                slideWidth="22%"
                                align="center"
                                slideIndex={slideIndexHeight}
                                onChange={slideIndexHeight => setSlideIndexHeight(slideIndexHeight)}
                                style={{ height: 50 }}
                            >
                                {heightArray.map((value, index) => {
                                    return <div className={slideIndexHeight === index ? 'active' : ''}>{value}</div>
                                })

                                }
                            </Gallery>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel6"  >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel6">
                <PanelHeader separator={false} left={<PanelHeaderBack onClick={setPanel} data-to="onboarding-panel5" />}>
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"><span className="active"></span><span className="active"></span><span className="active"></span><span className="active"></span><span></span><span></span></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}>Укажите <br /> ваш вес</Title>
                    <div className="vertical-center align-top">
                        <div className="vertical-center-content ">
                            <Gallery className="custom-gallery"
                                slideWidth="22%"
                                align="center"
                                slideIndex={slideIndexWeight}
                                onChange={slideIndexWeight => setSlideIndexWeight(slideIndexWeight)}
                                style={{ height: 50 }}
                            >
                                {weightArray.map((value, index) => {
                                    return <div className={slideIndexWeight === index ? 'active' : ''}>{value}</div>
                                })

                                }
                            </Gallery>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel7"  >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel7">
                <PanelHeader separator={false} left={<PanelHeaderBack onClick={setPanel} data-to="onboarding-panel6" />} >
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"><span className="active"></span><span className="active"></span><span className="active"></span><span className="active"></span><span className="active"></span><span></span></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}> Как часто вы занимаетесь спортом?</Title>
                    <div className="vertical-center align-top">
                        <div className="vertical-center-content ">
                            <FormLayout style={{ width: '100%' }}>
                                <Radio name="often" className="custom-radio with-img" value="1"><img src={thumbIcon} /><span> 1 раз в неделю и меньше</span></Radio>
                                <Radio name="often" className="custom-radio with-img" value="2"><img src={appleIcon} /><span> 2-3 раза в неделю</span></Radio>
                                <Radio name="often" className="custom-radio with-img" value="3"><img src={muscleIcon} /> <span>3 раза в неделю и больше</span></Radio>
                            </FormLayout>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom">
                    <Div>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel8"  >
                            Продолжить
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel8">
                <PanelHeader separator={false} left={<PanelHeaderBack onClick={setPanel} data-to="onboarding-panel7" />} >
                    <img className="timeIcon-small" src={timeIcon} alt="Time icon" />
                </PanelHeader>
                <Div>
                    <div className="loadbar"><span className="active"></span><span className="active"></span><span className="active"></span><span className="active"></span><span className="active"></span><span className="active"></span></div>
                    <Title level="1" weight="semibold" className=" text-centered" style={{ marginBottom: 20, marginTop: 32 }}> Когда планируете тренироваться?</Title>
                    <div className=" " style={{ marginBottom: 140 }}>
                        <div className="  ">
                            <Group separator={false} >
                                <FormItem top="Дни недели">
                                    <ChipsSelect
                                        value={selectedDays}
                                        onChange={setSelectedDays}
                                        options={days}
                                        showSelected={false}
                                        closeAfterSelect={false}
                                        placeholder="Не выбраны"
                                        creatable={false}
                                        emptyText="Ничего не найдено"
                                    />
                                </FormItem>
                            </Group>

                            <Group>
                                <FormItem top="Время">
                                    <Select
                                        placeholder="Не выбран"
                                        options={time}
                                        renderOption={({ option, ...restProps }) => (
                                            <CustomSelectOption {...restProps} />
                                        )}
                                    />
                                </FormItem>
                            </Group>
                        </div>

                    </div>
                </Div>
                <FixedLayout vertical="bottom" style={{ background: 'white' }}>
                    <Div>
                        <Caption level="3" weight="regular" style={{ marginBottom: 10, textAlign: 'center', color: '#818C99' }}>Нажимая кнопку «Начать тренироваться», вы соглашаетесь с <a href="" style={{ color: '#2D96FF' }}>Правилами использования Сервиса и Правилами защиты информации о Пользователях Сервиса</a></Caption>
                        <Button stretched size="m" style={{ marginBottom: 10, background: '#2D96FF' }} onClick={setPanel} data-to="onboarding-panel-finish"  >
                            Начать тренироваться
                        </Button>
                    </Div>
                </FixedLayout>
            </Panel>
            <Panel id="onboarding-panel-finish"  >
                <PanelHeader separator={false}   >
                    <img className="timeIcon-small" src={timeIconWhite} alt="Time icon" />
                </PanelHeader>

                <div className="vertical-center">
                    <div className="vertical-center-content text-centered">
                        <Div>
                            <Progress value={procent} style={{height: '6px', background: '#6abdf2'}} />
                            <div className="procent">{procent}%</div>
                            <Title level="1" weight="semibold" style={{ marginBottom: 20, marginTop: 32, color: 'white' }}>Составляем программу <br />
                                тренировок для вас</Title>
                            {
                                (procent === 100) &&
                                <Button stretched size="m" mode="overlay_primary" onClick={setPanel} data-to="onboarding-panel1"  >
                                В начало!
                                </Button>
                            }
                        </Div>
                    </div>
                </div>
            </Panel>
        </View>
    )
}



Onboarding.propTypes = {
};



export default Onboarding;

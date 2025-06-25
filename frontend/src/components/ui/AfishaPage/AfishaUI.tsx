import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { AfishaProps } from './type';
import React from 'react';
import './afisha.scss';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';
import { Background } from '@components/Shared/Background';

export const AfishaUI: React.FC<AfishaProps> = React.memo(
    ({ months, activeMonthIndex, onMonthChange, groupedAfishaItemsWithPerformanceByDate, lastElementRef, hasMore }) => {
        return (
            <div className="app-wrapper">
                <SEO
                    title="Афиша спектаклей - Центр современной драматургии"
                    description="Ознакомьтесь с актуальным расписанием спектаклей театра ЦСД. Купить билеты онлайн."
                    keywords="афиша, спектакли, театр, ЦСД, Центр современной драматургии, расписание, билеты"
                    path={ROUTES.AFISHA}
                />
                <Background />
                <section className="wrap afisha">
                    <div className="afisha__header">
                        <h1 className="afisha__main-title">Афиша</h1>
                        <MonthFilter
                            months={months}
                            activeMonthIndex={activeMonthIndex}
                            onMonthChange={onMonthChange}
                        />
                    </div>

                    <ul className="afisha__schedule">
                        {groupedAfishaItemsWithPerformanceByDate.length !== 0 ? (
                            groupedAfishaItemsWithPerformanceByDate.map(([date, afishaItems], index) => (
                                <li
                                    key={date}
                                    className="afisha__schedule-item"
                                    ref={
                                        index === groupedAfishaItemsWithPerformanceByDate.length - 1
                                            ? lastElementRef
                                            : null
                                    }
                                >
                                    <DaySchedule afishaItemsWithPerformance={afishaItems} />
                                </li>
                            ))
                        ) : (
                            <div className="not-found">Спектаклей в заданный период нет.</div>
                        )}
                    </ul>
                    {hasMore && <div className="loading">Загрузка...</div>}
                </section>
            </div>
        );
    },
);

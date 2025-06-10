import { DaySchedule } from '@components/AfishaPage/DaySchedule';
import { MonthFilter } from '@components/AfishaPage/MonthFilter';
import { AfishaProps } from './type';
import React from 'react';
import './afisha.scss';
import { SEO } from '@components/Shared/SEO';
import { ROUTES } from 'consts';

export const AfishaUI: React.FC<AfishaProps> = React.memo(
    ({ months, activeMonthIndex, onMonthChange, groupedAfishaItemsWithPerformanceByDate }) => {
        return (
            <>
                <SEO
                    title="Афиша спектаклей - Центр современной драматургии"
                    description="Ознакомьтесь с актуальным расписанием спектаклей театра ЦСД. Купить билеты онлайн."
                    keywords="афиша, спектакли, театр, ЦСД, Центр современной драматургии, расписание, билеты"
                    path={ROUTES.AFISHA}
                />

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
                        {Object.entries(groupedAfishaItemsWithPerformanceByDate).length != 0 ? (
                            Object.entries(groupedAfishaItemsWithPerformanceByDate).map(([date, afishaItems]) => (
                                <li key={date} className="afisha__schedule-item">
                                    <DaySchedule afishaItemsWithPerformance={afishaItems} />
                                </li>
                            ))
                        ) : (
                            <div className="not-found">Спектаклей в заданный период нет.</div>
                        )}
                    </ul>
                </section>
            </>
        );
    },
);

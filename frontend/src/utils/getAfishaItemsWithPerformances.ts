import { RootState } from "@services/store";
import { IAfishaItemsWithPerformance } from "types/afishaItemsWithPerformance";
import { useSelector } from "react-redux";
import { IAfishaItem } from "types/afishaItem";
import { selectPerformancesByIds } from "@services/selectors/performancesSelectors";

export const getAfishaItemsWithPerformances = (afishaItems: IAfishaItem[]) : IAfishaItemsWithPerformance[] =>{

    const performancesIds = afishaItems.map((afishaItem) => afishaItem.performance.id);
    const performances = useSelector((state: RootState) => selectPerformancesByIds(state, performancesIds));
    const afishaItemsWithPerformances = afishaItems.map((afishaItem)=>{
        const currentPerformance = performances.find((p) => p.id == afishaItem?.performance?.id);
        return {...afishaItem, performance:currentPerformance ? currentPerformance : null};
    });

    return afishaItemsWithPerformances;
};
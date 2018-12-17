import * as React from 'react'
import ArcanaCell from '../../components/ArcanaCell/ArcanaCell';
import { ViewType } from '../ViewTypeMenu/ViewType';
import ArcanaGrid from '../Grid/ArcanaGrid';
import ArcanaCard from '../ArcanaCard/ArcanaCard';

interface Props {
    arcanaArray: any[],
    viewType?: ViewType
}
const ArcanaList: React.SFC<Props> = props => {

    const { arcanaArray, viewType } = props;

    return (
        <div>
            {viewType === ViewType.List && 
                arcanaArray.map((arcana: any) => 
                    <ArcanaCell
                        key={arcana.uid}
                        arcana={arcana}
                    />
                )
            }
            {viewType === ViewType.Grid &&
                <ArcanaGrid>
                    {arcanaArray.map((arcana: any) => 
                        <ArcanaCard
                        arcana={arcana}
                        />
                    )}
                </ArcanaGrid>
            }
        </div>
    );

        // if (viewType === 'grid') {

        //     return (

        //         <div className={styles.grid}>
                
        //             {this.props.arcanaArray.map(arcana => 
        
        //                 <ArcanaGridCell
        //                 key={arcana.uid}
        //                 arcanaID={arcana.uid}
        //                 imageURL={arcana.imageURL}
        //                 /> 
                
        //             )}
        //         </div>
        //     );
        // }

}

export default ArcanaList;
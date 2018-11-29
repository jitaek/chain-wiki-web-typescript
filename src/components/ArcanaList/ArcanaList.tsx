import * as React from 'react'
import ArcanaCell from '../../components/ArcanaCell/ArcanaCell';

interface Props {
    arcanaArray: [],
    viewType?: 'grid' | 'list'
}
const ArcanaList: React.SFC<Props> = props => {

    const { arcanaArray, viewType } = props;

    return (
        <div>
            {arcanaArray.map((arcana: any) => 
                <ArcanaCell
                    key={arcana.arcanaID}
                    arcana={arcana}
                />
            )}
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
ArcanaList.defaultProps = { viewType: 'list' }
export default ArcanaList;
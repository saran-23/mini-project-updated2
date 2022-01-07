import React, { useContext } from 'react';
import { ModelContext } from './components/context/model-context';
import Detection from './components/Image/Detection';
import Video from './components/video/Video';
import Realtime from './components/Realtime/Realtime';
import './components/utils/Selector.css';

const Selector = () => {
    const { selected, selectMode } = useContext(ModelContext);

    return (
        <React.Fragment>
            <div className="top-div">
                <div className="section-div">
                    {selected === 'Image' ? (
                        <div className="saran" onClick={() => selectMode('Image')}>
                                <div className="selected-text">Upload Image</div>
                        </div>
                    ) : (
                        <div className="saran" onClick={() => selectMode('Image')}> 
                                <div className="deselected-text">Upload Image</div>
                        </div>
                    )}
                </div>
                
                <div className="section-div">
                    {selected === 'Video' ? (
                            <div className="saran" onClick={() => selectMode('Video')}>
                                <div className="selected-text">Upload Video</div>
                            </div>
                        ) : (
                            <div className="saran" onClick={() => selectMode('Video')}> 
                                <div className="deselected-text">Upload Video</div>
                            </div>
                        )}
                </div>

                <div className="section-div">
                    {selected === 'Realtime' ? (
                        <div className="saran" onClick={() => selectMode('Realtime')}>
                                <div className="selected-text">Open Camera</div>
                        </div>
                    ) : (
                        <div className="saran" onClick={() => selectMode('Realtime')}>
                            <div className="deselected-text">Open Camera</div>
                        </div>
                    )}
                </div>
            </div>

            {selected === 'Image' && (
                <Detection />
            )}
            {selected === 'Video' && (
                <Video />
            )}
            {selected === 'Realtime' && (
                <Realtime />
            )}

        </React.Fragment>
    )
}
export default Selector;
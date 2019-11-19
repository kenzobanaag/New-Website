import React from 'react';
import ZeroIcon from '@material-ui/icons/ExposureZero';
import AddIcon from '@material-ui/icons/Add';
import DefIcon from '@material-ui/icons/Code';
import RmIcon from '@material-ui/icons/Remove';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';

//pass in a index in props
function LangList(props) {

    const stateList = [
        [//languages
            {
                title: 'Java',
                proficiency: 1,
            },
            {
                title: 'C#',
                proficiency: 1,
            },
            {
                title: 'Android',
                proficiency: 1
            },
            {
                title: 'C++',
                proficiency: 0,
            },
            {
                title: 'HTML, CSS, JavaScript',
                proficiency: 0
            },
        ],
        [//frameworks
            {
                title: 'Git',
                proficiency: 1
            },
            {
                title: 'ReactJS',
                proficiency: 1,
            },
            {
                title: 'Material-UI',
                proficiency: 1,
            },
            
        ],
        [//databases
            {
                title: 'PostgreSQL',
                proficiency: 1,
            },
            {
                title: 'SQLite',
                proficiency: 0,
            },
            {
                title: 'MongoDB',
                proficiency: 1,
            },
            {
                title: 'Neo4J',
                proficiency: 0,
            },
        ],
        [//cloud services
            {
                title: 'AWS Amplify',
                proficiency: 0
            },
            {
                title: 'Azure CosmosDB',
                proficiency: -1
            },
            {
                title: 'Firebase',
                proficiency: 0,
            }
        ],
        [//concepts
            {
                title: 'Object Oriented Programming',
                proficiency: 1,
            },
            {
                title: 'SOLID Principles',
                proficiency: 1
            },
            {
                title: 'Requirements Engineering',
                proficiency: 0
            },
            {
                title: 'Software Testing',
                proficiency: 0
            },
        ]
    ]

    const proficiencyHandler = (proficiency) => {
        switch (proficiency) {
            case 1: return(<AddIcon/>)
            case 0: return(<ZeroIcon/>)
            case -1: return(<RmIcon/>)
            default: return(<DefIcon/>)
        }
    }

    const arrayHandler = (arrayItem) => {
        return (arrayItem.map((item, index) => (
            <ListItem key={index}>
                <ListItemAvatar>
                    <Avatar style={{ height: 35, width: 35 }}>
                        {proficiencyHandler(item.proficiency)}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={item.title}
                />
            </ListItem>
        )))
    }

    return (
        <React.Fragment>
            {arrayHandler(stateList[props.pos])}
        </React.Fragment>
    );
}

export default LangList;
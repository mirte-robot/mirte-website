<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

useHead({
  title: 'Choose your MIRTE robot – MIRTE',
  meta: [
    {
      name: 'description',
      content:
        'Compare all MIRTE robots and discover which robot best fits your classroom, project or learning goals.'
    }
  ]
})

const activeTooltip = ref(null)

const robots = [
  {
    id: 'lite',
    name: 'MIRTE Lite',
    image: '/images/MIRTE_lite_obstacle_sensor_transparant.png',
    bestFor: 'First robotics lessons'
  },
  {
    id: 'basic',
    name: 'MIRTE Basic',
    image: '/images/MIRTE_basic_transparant.png',
    bestFor: 'Learning Python'
  },
  {
    id: 'pioneer',
    name: 'MIRTE Pioneer',
    image: '/images/MIRTE_pioneer_transparant.png',
    bestFor: 'AI & autonomy'
  },
  {
    id: 'master',
    name: 'MIRTE Master',
    image: '/images/MIRTEMasterCloseUp.png',
    bestFor: 'Advanced robotics'
  }
]

const features = [
  {
    category: 'Programming',
    rows: [
      {
        name: 'Block programming',
        tooltip: 'Visual drag-and-drop programming.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'future', tooltip: 'Planned for future software releases.' }
        }
      },
      {
        name: 'Python programming',
        tooltip: 'Program the robot using Python.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'C/C++ programming',
        tooltip: 'Program the robot using C/C++.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'limited', tooltip: 'You can use the Raspberry Pi Pico C/C++ SDK.' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Linux / ROS',
        tooltip: 'Linux and Robot Operating System support.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      }
    ]
  },

  {
    category: 'Sensors',
    rows: [
      {
        name: 'Line following',
        tooltip: 'Follow lines using reflectance sensors.',
        values: {
          lite: { status: 'yes' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'no' }
        }
      },
      {
        name: 'Obstacle avoidance',
        tooltip: 'Avoid nearby obstacles.',
        values: {
          lite: { status: 'yes' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Distance sensing',
        tooltip: 'Measure distance to objects.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'IMU',
        tooltip: 'Measure orientation and accelaration of the robot.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'future', tooltip: 'Planned for future software releases.' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Camera',
        tooltip: 'Capture images and video.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Lidar',
        tooltip: 'Laser-based ranging sensor.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'limited',
            tooltip: 'Requires additional Lidar hardware.'
          },
          master: {
            status: 'yes',
            tooltip: 'Fully supported.'
          }
        }
      },
      {
        name: 'Depth camera',
        tooltip: 'Detect depth and 3D structure.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: {
            status: 'limited',
            tooltip: 'Requires additional depth camera.'
          },
          master: {
            status: 'yes'
          }
        }
      }
    ]
  },

  {
    category: 'AI & Robotics',
    rows: [
      {
        name: 'Computer Vision',
        tooltip: 'Image recognition and AI projects using OpenCV and/or YOLO.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Manipulation',
        tooltip: 'Ability to move objects around (using MoveIt!)',
        values: {
          lite: { status: 'no' },
          basic: {
            status: 'limited',
            tooltip: 'Possible, but limited. Only small SG90 servos. No MoveIt support.'
          },
          pioneer: {
            status: 'limited',
            tooltip: 'Possible, but limited. Only small SG90 servos. No MoveIt support.'
          },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Navigation',
        tooltip: 'Autonomous navigation with the robot using Nav2.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'limited', tooltip: 'Possible, but limited by hardware performance.' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Audio output',
        tooltip: 'Image recognition and AI projects.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'no' },
          pioneer: { status: 'future', tooltip: 'Planned for future releases.' },
          master: { status: 'limited' }
        }
      }
    ]
  },

  {
    category: 'Custamizability',
    rows: [
      {
        name: 'Breadboard as alternative to PCB',
        tooltip: 'Learn electronics by creating connections yourself.',
        values: {
          lite: { status: 'yes' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'no' }
        }
      },
      {
        name: 'Compatible with LEGO Technics',
        tooltip: 'Use the MIRTE PCB to simplify assembly.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'future', tooltip: 'Planned for future releases.' },
          pioneer: { status: 'future', tooltip: 'Planned for future releases.' },
          master: { status: 'no' }
        }
      },
      {
        name: 'Easy wiring with PCB',
        tooltip: 'Use the MIRTE PCB to simplify assembly.',
        values: {
          lite: { status: 'no' },
          basic: { status: 'yes' },
          pioneer: { status: 'yes' },
          master: { status: 'yes' }
        }
      },
      {
        name: 'Hardware models',
        tooltip: 'Use the MIRTE PCB to simplify assembly.',
        values: {
          lite: { text: 'FreeCAD' },
          basic: { text: 'FreeCAD' },
          pioneer: { text: 'FreeCAD' },
          master: { text: 'Solidworks' }
        }
      },
    ]
  }
]

const statusInfo = {
  yes: {
    icon: 'circle-check',
    class: 'supported'
  },
  limited: {
    icon: 'circle-check',
    class: 'supported-limited'
  },
  future: {
    icon: 'clock',
    class: 'supported-limited'
  },
  no: {
    icon: 'xmark',
    class: 'unsupported'
  }
}

function getIcon(status) {
  return statusInfo[status]?.icon || 'circle-xmark'
}

function getClass(status) {
  return statusInfo[status]?.class || 'unsupported'
}
</script>

<template>
  <div class="container">

    <div class="intro">
      <h1>Which MIRTE robot should I choose?</h1>

      <p>
        Compare the available MIRTE robots and find the best fit for your
        classroom, project or learning goals.
      </p>
    </div>

    <div class="table-responsive">

      <table class="table comparison-table">

        <thead>

          <tr>
            <th class="feature-column">
              Feature
            </th>

            <th v-for="robot in robots" :key="robot.id" class="text-center">
              <NuxtImg :src="robot.image" :alt="robot.name" width="70" height="70" format="webp" />

              <div class="robot-name">
                {{ robot.name }}
              </div>
            </th>
          </tr>


        </thead>

        <tbody>

          <template v-for="category in features" :key="category.category">

            <tr class="category-row">
              <td :colspan="robots.length + 1">
                {{ category.category }}
              </td>
            </tr>

            <tr v-for="feature in category.rows" :key="feature.name">
              <td class="feature-column">

                {{ feature.name }}

                <span v-if="feature.tooltip" class="tooltip-wrapper" @mouseenter="activeTooltip = feature.name"
                  @mouseleave="activeTooltip = null">
                  <ClientOnly>
                    <FontAwesomeIcon icon="circle-info" />
                  </ClientOnly>

                  <span v-if="activeTooltip === feature.name" class="tooltip-box">
                    {{ feature.tooltip }}
                  </span>

                </span>

              </td>

              <td v-for="robot in robots" :key="robot.id" class="text-center">

                <span class="cell-wrapper" @mouseenter="activeTooltip = feature.name + robot.id"
                  @mouseleave="activeTooltip = null">
                  <ClientOnly>
                    <FontAwesomeIcon :icon="getIcon(feature.values[robot.id].status)"
                      :class="getClass(feature.values[robot.id].status)" />
                  </ClientOnly>
                  {{ feature.values[robot.id].text }}
                  <span v-if="
                    feature.values[robot.id].tooltip &&
                    activeTooltip === feature.name + robot.id
                  " class="tooltip-box">
                    {{ feature.values[robot.id].tooltip }}
                  </span>

                </span>

              </td>

            </tr>

          </template>

        </tbody>

      </table>

    </div>

  </div>
</template>

<style scoped>
.intro {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 25px;
}

.comparison-table th {
  background-color: #b8d1eb;
  color: white;
}

.robot-name {
  margin-top: 8px;
}

.feature-column {
  min-width: 300px;
  font-weight: 600;
}

.category-row td {
  background: #f4f6f8;
  font-weight: bold;
  color: #6089ba;
  border-top: 2px solid #6089ba;
}

.supported {
  color: #28a745;
  font-size: 1.4rem;
}

.supported-limited {
  color: #fbb927;
  font-size: 1.4rem;
}

.supported-future {
  color: #6089ba;
  font-size: 1.4rem;
}

.unsupported {
  color: #dc3545;
  font-size: 1.4rem;
}

.tooltip-wrapper,
.cell-wrapper {
  position: relative;
  cursor: help;
}

.tooltip-box {
  position: absolute;
  top: 24px;
  left: 0;
  width: 260px;
  background: white;
  color: black;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  z-index: 1000;
  font-size: 0.9rem;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
}

.legend {
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
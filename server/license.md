# Software License and Quota

As an RPA automation tool, LeanRunner is free to start and also has flexible license plans to choose from.

LeanRunner has three components: Designer, Robot and Controller. The following describes the licensing and usage of each component.

* **Designer**: The LeanRunner designer is completely free. This means that there is no cost involved and there is no limit on the amount of usage, no matter you develop a script in the designer or run a script inside the designer.
* **Robot**: The robot has a free quota when no license is installed. If the amount of quota is exceeded, it will prompt that a license is needed. [Robot License and Usage](#robot_license) has more details.
* **Controller**: The server license and robot license can both be installed on the controller. When no license is installed, one robot can be used together with controller to run automated tasks. For details, please refer to [Controller License Management](#server_license).

The LeanRunner has two types of licenses:
1. Controller License
2. Robot license
 
<a id="designer"></a>

## The designer is completely free

As a cost-friendly RPA tool, LeanRunner can be a good choice for all small companies or organizations. LeanRunner Designer is completely free. This means that when develop a script or run it in the designer, there is no involved cost and there is no usage quota.

If you develop a RPA script and use it in a small team, a completely free solution is available:

1. First develop you script in the free designer, 
2. Then deploy the Designer and your RPA script at the same time, 
3. Open the script with Designer execute when needed. 
 
This way you can automate your RPA process at no cost. Free solutions can get community level technical support.

<a id="robot_license"></a>

## Robot Licensing and Free Quota


The robot execution mode refers to the way you configure the robot execution process or execute the script through the command line. You can install robot licenses for LeanRunner Robots. When executing the script through the robot, license is only verified under certain conditions. For some scenarios, the RPA script can run without any robot license.
。
The following is the quota amount for each run.

Each Run  | Free Quota | With License
---|---|---
Built-in Automation libraries(e.g. Windows, OCR, image etc.)  |  2000 times | no limit

The built-in automation library refers to the automation APIs provided by LeanRunner, such as automation APIs for operating Windows applications, Java applications, image recognition, and OCR. When no license is installed, these APIs can be called 2000 times for each execution. If it exceeds, you will be prompted for a license. If a robot license is installed, there is no limit on the number of calls.

Examples of usage:

* **Use scenario 1: Web scenario, no license needed.**

  Company A used open source Web automation libraries (such as selenium or puppeteer) to automate Web processes, and used LeanRunner robots to drive workflow. The script also uses the built-in OCR API for text recognition, but each workflow run calls OCR APIs for about 100 times.

   In this case, because the main use is an open source automation library, and the number of calls to the built-in API does not exceed 2000, so the RPA workflow can run well without any license.

* **Use scenario 2: Windows application RPA requires a robot certificate.**

  Company B uses a Qt desktop application in their business process, and implemented a RPA process with LeanRunner. In the automated process, a large number of built-in Windows automation, image recognition, OCR recognition and other APIs are used. In each run more than 2000 API calls is made.

  Because the number of API calls exceeds the free quota, Company B need to unlock the quota limit by installing a robot license. After a license is installed, RPA automation processes of any complexity can be freely executed.

**Installation of Robot License**

The robot license has two installation types: **Seat Robot License** and **Floating Robot License**.

* **Seat Robot License** is installed directly on a Robot.
* **Floating Robot License** is installed on a Controller, when a robot is connected to the controller, a robot license is automatically allocated for it. When a connected robot stopped, the corresponding robot license is released, and the controller can allocate this license to other robots.
  
<a id="server_license"></a>

## Controller License Management

By installing a controller license on a LeanRunner Controller, you can unlock the corresponding function of this controller. One controller license and multiple floating robot licenses can be installed on one controller.

* The controller license is used to unlock the full version of the LeanRunner controller.

* Robot license is used to:
  1. Unlock the number of robots that this controller can manage. For example, when three robot licenses are installed on a LeanRunner Controller, three robots can work with this controller to perform RPA tasks concurrently, improving the throughput of automated tasks.
  2. Every robot connected to this controller will gain unlimited execution capability. For details, please see the above [Robot License and Usage](#robot_license).
 

### License Usage Scenarios:

There are the following license related scenarios when run RPA process with Controller.

1. **Free mode: Single robot**

   If you want to use a controller and one robot machine to run tasks, you only need to install one robot license. In this mode, the controller can control the robot to perform all types of processes. The controller and the robot can either be installed on the same machine, or be installed on separate machines. The single robot model does not require a controller license, so the price is low, it can meet the needs of small-scale RPA automation, and provides a cost-effective choice for enterprise users who have just started RPA automation business.
   
   If only one robot license is installed and multiple robots are configured to connect to the controller, only one robot can be enabled and perform tasks, and other robots connected to the controller will be disabled.

2. **Multi-robots**

   A controller can control several robots to run multiple RPA processes concurrently. To make it happen, a controller license and several robot licenses need to be installed. One LeanRunner Controller can connect up to 32 robots to perform automated tasks. And can use all the functions of all controller platforms.

   The multi-robots mode can meet the throughput requirements of RPA automation of almost all enterprises.

3. **Trial mode**

   When no license is installed, it is in trial mode. The trial period is within 3 months after the product is first installed. During the trial period, the controller can operate up to 2 robots to perform tasks. After the trial period, the controller can connect to one robot without installing a license. If you need to support more robots, please switch to multi-robot mode by installing the corresponding licenses.

## License Duration Types

The license has the following duration types:

* Fixed-term license
* Permanent license

Permanent licenses never expire, and can always be upgraded. The license for a fixed term is in units of years.

[TOC]



- 修改etc/hadoop/core-site.xml

    ```
    <configuration>
        <property>
            <name>fs.defaultFS</name>
            <value>hdfs://192.168.114.101:9000</value>
        </property>
        <property>
            <name>hadoop.tmp.dir</name>
            <value>/opt/module/hadoop-2.7.2/data/tmp</value>
        </property>
    </configuration>
    ```

- 修改etc/hadoop/hdfs-site.xml

    ```
    <configuration>
    	 <!-- 备份份数 -->
    	 <property>
            	 <name>dfs.replication</name>
             	 <value>1</value>
    	 </property>
    </configuration>
    ```

- 修改etc/hadoop/hadoop-env.sh

    ```
    export JAVA_HOME=/opt/module/jdk1.8.0_231
    ```

    

- 格式化namenode

    ```
    bin/hdfs namenode -format
    ```

    

- 启动namenode

    ```
    sbin/hadoop-daemon.sh start namenode
    ```

- 启动datanode

    ```
    sbin/hadoop-daemon.sh start datanode
    ```

- 启动

    ```
    sbin/yarn-daemon.sh start resourcemanager
    ```

- HDFS文件管理

    ```
    192.168.114.101:50070
    ```

    
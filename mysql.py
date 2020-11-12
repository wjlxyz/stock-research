import pymysql


# sql 语句执行不做语句和数据校验,只执行
def write(sql):
    # 打开数据库连接
    db = pymysql.connect("localhost", "root", "daliwang", "db_stock_research")
    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()
    # 使用 execute()  方法执行 SQL 查询
    cursor.execute(sql)
    # 使用 fetchone() 方法获取单条数据.
    data = cursor.fetchone()
    print("Database version : %s " % data)
    # 关闭数据库连接
    db.close()


def read(sql):
    # 打开数据库连接
    db = pymysql.connect("localhost", "root", "daliwang", "db_stock_research")
    # 使用 cursor() 方法创建一个游标对象 cursor
    cursor = db.cursor()
    # 使用 execute()  方法执行 SQL 查询
    cursor.execute(sql)
    # 使用 fetchone() 方法获取单条数据.
    data = cursor.fetchall()
    print("Database version : %s " % data)
    # 关闭数据库连接
    db.close()
    return data


if __name__ == '__main__':
    write("select VERSION()")
    read("select VERSION()")
